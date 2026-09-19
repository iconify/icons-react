import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/t/tw3byrbcp.css';
import '../../css/b/b6qqbxbne.css';
import '../../css/d/dspl_gbsw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="tw3byrbcp"/><path class="b6qqbxbne"/><path class="dspl_gbsw"/>`,
		"fallback": "ant-design:dollar-circle-twotone",
	});
}

export default Component;
