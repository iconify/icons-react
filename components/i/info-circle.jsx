import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr9wr-bhx.css';
import '../../css/b/bd8f5nbwf.css';
import '../../css/m/mabwzbbvc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr9wr-bhx"/><circle class="bd8f5nbwf"/><path class="mabwzbbvc"/>`,
		"fallback": "nimbus:info-circle",
	});
}

export default Component;
