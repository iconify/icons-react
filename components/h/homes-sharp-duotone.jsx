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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sze8o1f1r {
  stroke-opacity: 0.4;
  d: path("M3 15L3 14L3 6.8909L8 3L10.956 5.3003L11.3419 5.6006");
}

.xabi3bc4j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.3857 7.2108C13.5613 7.0742 13.7775 7 14 7C14.2225 7 14.4387 7.0742 14.6143 7.2108L21.6143 12.6581C21.8577 12.8476 22 13.1387 22 13.4471L22 20.9999C21.9999 21.5521 21.5522 21.9998 21 21.9999L7 21.9999C6.4478 21.9998 6.0001 21.5521 6 20.9999L6 13.4471C6 13.1387 6.1424 12.8476 6.3857 12.6581L13.3857 7.2108ZM12 20L16 20L16 16L12 16L12 20Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="sze8o1f1r"/><path clip-rule="evenodd" class="xabi3bc4j"/></g>`,
		"fallback": "keyline-icons:homes-sharp-duotone",
	});
}

export default Component;
