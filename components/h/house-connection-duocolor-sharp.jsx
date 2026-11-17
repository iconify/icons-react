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
		"content": `<style>.klsy0lb8n {
  stroke-opacity: 0.4;
  d: path("M12 17v4m-8 0h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wxmc1yhhu {
  d: path("m12 3l6.222 5.444V17H5.778V8.444z");
}
</style><g class="nrj6p8qat"><path class="klsy0lb8n"/><path class="wxmc1yhhu"/></g>`,
		"fallback": "coolicons:house-connection-duocolor-sharp",
	});
}

export default Component;
