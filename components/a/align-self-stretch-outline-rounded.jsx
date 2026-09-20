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
		"content": `<style>.ummve7m4n {
  fill: currentColor;
  d: path("M3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h18q.425 0 .713.288T22 21t-.288.713T21 22zm8.5-4.5q-.425 0-.712-.288T10.5 16.5V7q0-.425.288-.712T11.5 6h1q.425 0 .713.288T13.5 7v9.5q0 .425-.288.713t-.712.287zM3 4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4z");
}
</style><path class="ummve7m4n"/>`,
		"fallback": "material-symbols:align-self-stretch-outline-rounded",
	});
}

export default Component;
