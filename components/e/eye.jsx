import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dbm5r8bdx {
  fill: var(--svg-color--fff, #fff);
  d: path("M57 32s-8.4 16.7-25 16.7S7 32 7 32s8.4-16.7 25-16.7S57 32 57 32");
}

.itpex0bro {
  fill: var(--svg-color--231f20, #231f20);
  d: path("M39.4 32c0 4.1-3.4 7.5-7.5 7.5s-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5");
}

.xjt6y_pik {
  fill: var(--svg-color--231f20, #231f20);
  d: path("M62 32S51.9 52 32 52S2 32 2 32s10.1-20 30-20s30 20 30 20");
}

.xy-yah-me {
  fill: var(--svg-color--42ade2, #42ade2);
  d: path("M45.4 32c0 7.5-6 13.5-13.5 13.5s-13.5-6-13.5-13.5s6-13.5 13.5-13.5s13.5 6 13.5 13.5");
}
</style><path class="xjt6y_pik"/><path class="dbm5r8bdx"/><path class="xy-yah-me"/><path class="itpex0bro"/>`,
		"fallback": "emojione:eye",
	});
}

export default Component;
