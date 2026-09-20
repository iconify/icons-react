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
		"content": `<style>.umb64uc8n {
  fill: currentColor;
  d: path("M8 22q-.425 0-.713-.288T7 21V5q0-.425.288-.713T8 4h2V2h4v2h2q.425 0 .713.288T17 5v16q0 .425-.288.713T16 22H8Zm1-3h6V6H9v13Z");
}
</style><path class="umb64uc8n"/>`,
		"fallback": "material-symbols:battery-vert-005",
	});
}

export default Component;
