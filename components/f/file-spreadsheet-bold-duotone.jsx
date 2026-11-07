import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/i/ixw1cy8fb.css';
import '../../css/g/g502-xb2c.css';
import '../../css/m/mdomo9bqv.css';
import '../../css/a/a04zgy3zm.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="ixw1cy8fb"/><path class="g502-xb2c"/><path class="mdomo9bqv"/><path class="a04zgy3zm"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-spreadsheet-bold-duotone",
	});
}

export default Component;
