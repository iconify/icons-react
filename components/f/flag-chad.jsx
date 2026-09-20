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
		"content": `<style>.tkqt_0b0n {
  fill: var(--svg-color--c60c30, #c60c30);
  d: path("M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}

.xuph2qbqs {
  fill: var(--svg-color--002664, #002664);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z");
}

.yc4aorh9m {
  fill: var(--svg-color--fecb00, #fecb00);
  d: path("M12 5h12v26H12z");
}
</style><path class="xuph2qbqs"/><path class="yc4aorh9m"/><path class="tkqt_0b0n"/>`,
		"fallback": "twemoji:flag-chad",
	});
}

export default Component;
