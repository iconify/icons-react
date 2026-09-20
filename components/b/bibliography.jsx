import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diuciquml.css';
import '../../css/q/qy_x9db4g.css';
import '../../css/o/olk_csb2h.css';
import '../../css/z/zsw5drbid.css';
import '../../css/w/wzubvnb2j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diuciquml"/><path class="qy_x9db4g"/><path class="olk_csb2h"/><path class="zsw5drbid"/><path class="wzubvnb2j"/>`,
		"fallback": "material-icon-theme:bibliography",
	});
}

export default Component;
