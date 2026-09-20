import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ea9rs5e0p {
  fill: currentColor;
  d: path("M9.135 9.048A1.35 1.35 0 0 0 10.343 11h1.153v2.549c0 1.538 2.074 2.022 2.758.647l3.102-6.239A1.33 1.33 0 0 0 17.448 7h2.802A3.75 3.75 0 0 1 24 10.75V12h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1.25A3.75 3.75 0 0 1 20.25 21H5.75A3.75 3.75 0 0 1 2 17.25v-6.5A3.75 3.75 0 0 1 5.75 7h4.403zm4.002-5.795c.214-.43.86-.278.861.202v3.55h2.152c.26 0 .43.273.314.506L13.36 13.75c-.214.43-.86.278-.861-.202V9.999h-2.152a.35.35 0 0 1-.314-.506z");
}
</style><path class="ea9rs5e0p"/>`,
		"fallback": "fluent:battery-charge-28-filled",
	});
}

export default Component;
