import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bafen6b6w {
  d: path("M8.75 8.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ftaiyfqft {
  d: path("M12 7v1.75l1.5 1");
}

.r6vkyrbtm {
  d: path("M2.5 3h19v11.5h-19Zm4 11.5v7m11-7v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r6vkyrbtm"/><path class="bafen6b6w"/><path class="ftaiyfqft"/></g>`,
		"fallback": "uix-sharp:coming-soon-sign",
	});
}

export default Component;
