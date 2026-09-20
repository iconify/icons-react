import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c5k958sty {
  d: path("M237.66 90.34a8 8 0 0 0-11.32 0L136 180.69L71.31 116l30.35-30.34A8 8 0 0 0 96 72H24a8 8 0 0 0-8 8v72a8 8 0 0 0 13.66 5.66L60 127.31l70.34 70.35a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 0-11.32M32 132.69V88h44.69Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.wcqw0plzt {
  d: path("m96 80l-72 72V80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="wcqw0plzt"/><path class="c5k958sty"/></g>`,
		"fallback": "ph:arrow-elbow-left-duotone",
	});
}

export default Component;
