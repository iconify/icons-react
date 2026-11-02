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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.r1ciqdbuo {
  d: path("M7.393 6.053A5 5 0 0 1 17 8a1 1 0 0 1-2 0a2.998 2.998 0 0 0-4.962-2.269A3 3 0 0 0 9 8a1 1 0 0 1-2 0a5 5 0 0 1 .393-1.947");
}

.tfzlcrb2c {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 7h8c.491 0 .976.108 1.422.313c1.384.628 2.267 2.036 2.559 3.491l1 5a4.5 4.5 0 0 1-.024 1.918C20.529 19.585 18.947 21 17 21H7c-1.947 0-3.529-1.415-3.957-3.278a4.5 4.5 0 0 1-.024-1.918l1-5c.292-1.455 1.175-2.863 2.559-3.491A3.4 3.4 0 0 1 8 7");
}
</style><g class="cuyn6tgcc"><path class="tfzlcrb2c"/><path class="r1ciqdbuo"/></g>`,
		"fallback": "coolicons:handbag-bulk-round",
	});
}

export default Component;
