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
		"content": `<style>.bazhhwb_h {
  fill: currentColor;
  d: path("M9.573 17q-.344 0-.574-.232t-.23-.576V5.616q0-.667.475-1.141Q9.72 4 10.386 4h3.234q.667 0 1.139.475q.472.474.472 1.14v10.577q0 .344-.232.576q-.233.232-.576.232zm.196-1h4.462V5.616q0-.27-.173-.443T13.616 5h-3.231q-.27 0-.443.173t-.173.443zm-.5 2.385h5.462q.212 0 .356.143t.144.357t-.144.356t-.356.144H9.269q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.144M9.77 16h4.462z");
}
</style><path class="bazhhwb_h"/>`,
		"fallback": "material-symbols-light:general-device-outline-rounded",
	});
}

export default Component;
