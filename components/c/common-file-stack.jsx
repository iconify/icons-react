import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ypkccbxmz.css';
import '../../css/n/n6-2msbkn.css';
import '../../css/l/lhiuveb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ypkccbxmz"/><path class="n6-2msbkn"/><path class="lhiuveb0l"/></g>`,
		"fallback": "streamline-ultimate:common-file-stack",
	});
}

export default Component;
