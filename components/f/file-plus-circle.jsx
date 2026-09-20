import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adm_kkbuq.css';
import '../../css/h/hffq3ijlx.css';
import '../../css/t/tjw051bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="adm_kkbuq"/><path class="hffq3ijlx"/><path clip-rule="evenodd" class="tjw051bld"/>`,
		"fallback": "lineicons:file-plus-circle",
	});
}

export default Component;
