import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jguqovbkx.css';
import '../../css/o/ofo_293yk.css';
import '../../css/e/ebufvjlmv.css';
import '../../css/d/d6ka9y43j.css';
import '../../css/e/eym0x_vcx.css';
import '../../css/v/vnxtwtbcd.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jguqovbkx"/><path class="ofo_293yk"/><path class="ebufvjlmv"/><circle class="d6ka9y43j"/><circle class="eym0x_vcx"/><path class="vnxtwtbcd"/>`,
		"fallback": "flag:az-4x3",
	});
}

export default Component;
