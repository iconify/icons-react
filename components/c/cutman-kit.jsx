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
		"content": `<style>.k8kicab8n {
  d: path("M12.1 19H2.5V7h17v5M8 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-4 2.75v5.5M7.25 12.5h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-4b6mtmi {
  d: path("M14.75 17.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="k8kicab8n"/><path class="z-4b6mtmi"/></g>`,
		"fallback": "uix-sharp:cutman-kit",
	});
}

export default Component;
