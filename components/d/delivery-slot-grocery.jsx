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
		"content": `<style>.ael48ebqa {
  d: path("M14.5 20.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm4.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.cg72akhfo {
  d: path("M13.5 14.5h5v2h2l1.5 1.75v1.5h-8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe4-rwbij {
  d: path("M10.7 20H3V4.5h16v7.2M3 9h16M7.5 2.5v3.75m7-3.75v3.75");
}
</style><g class="ulnmmdpxh"><path class="xe4-rwbij"/><path class="cg72akhfo"/><path class="ael48ebqa"/></g>`,
		"fallback": "uix-sharp:delivery-slot-grocery",
	});
}

export default Component;
