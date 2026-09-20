import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gmjq-hxzi.css';
import '../../css/d/dfkswxblu.css';
import '../../css/m/mdq_zveie.css';
import '../../css/d/dy-iqbcva.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gmjq-hxzi"/><path class="dfkswxblu"/><path class="mdq_zveie"/><path class="dy-iqbcva"/></g>`,
		"fallback": "streamline:beach",
	});
}

export default Component;
