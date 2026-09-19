import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh_nvlg2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xh_nvlg2n"/>`,
		"fallback": "gravity-ui:code-trunk",
	});
}

export default Component;
