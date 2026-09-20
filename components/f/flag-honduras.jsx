import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lboj7_b5t {
  fill: var(--svg-color--2657a7, #2657a7);
  d: path("m18.265 17.76l-.249-.766l-.249.766h-.806l.652.473l-.249.767l.652-.474l.652.474l-.249-.767l.652-.473zm5.332 2.48l-.249.766l.652-.473l.652.473l-.249-.766l.652-.473h-.806L24 19l-.249.767h-.806zm.652-4.48L24 14.994l-.249.766h-.806l.652.473l-.249.767l.652-.474l.652.474l-.249-.767l.652-.473zm-12.707 4.48l-.249.766l.652-.473l.652.473l-.249-.766l.652-.473h-.806L11.945 19l-.249.767h-.806zm.652-4.48l-.249-.766l-.249.766h-.806l.652.473l-.249.767l.652-.474l.652.474l-.249-.767l.652-.473z");
}

.lc9tbs6rs {
  fill: var(--svg-color--0156a3, #0156a3);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0z");
}

.zut58gbmm {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 14h36v8H0z");
}
</style><path class="zut58gbmm"/><path class="lc9tbs6rs"/><path class="lboj7_b5t"/>`,
		"fallback": "twemoji:flag-honduras",
	});
}

export default Component;
