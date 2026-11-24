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
		"content": `<style>.ctynhw5wp {
  d: path("m16.293 21.707l-3-3a1 1 0 0 1 1.414-1.414L16 18.586V13a1 1 0 0 1 2 0v5.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.oses70bfc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 20a6 6 0 0 1-.74-11.955c.742-2.012 2.206-3.704 4.274-4.403c2.856-.964 5.823.266 7.337 2.833c.419.717.721 1.496.896 2.307A.998.998 0 0 1 17.791 10H9v9a1 1 0 0 1-1 1Z");
}
</style><g class="cuyn6tgcc"><path class="oses70bfc"/><path class="ctynhw5wp"/></g>`,
		"fallback": "coolicons:cloud-download-corner-bulk-sharp",
	});
}

export default Component;
