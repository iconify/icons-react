import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb6dpeboc.css';
import '../../css/x/xx4upobit.css';
import '../../css/b/b6ueueufz.css';
import '../../css/n/nvorv_bgg.css';
import '../../css/y/yk1t4fg4j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb6dpeboc"/><circle class="xx4upobit"/><circle class="b6ueueufz"/><circle class="nvorv_bgg"/><path class="yk1t4fg4j"/>`,
		"fallback": "carbon:data-quality-definition",
	});
}

export default Component;
