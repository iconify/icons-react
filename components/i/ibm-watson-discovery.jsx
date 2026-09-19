import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w785vnb8d.css';
import '../../css/b/bn83kioio.css';
import '../../css/s/svjxeeepc.css';
import '../../css/c/cq8_9dfnj.css';
import '../../css/a/ajjiiyh9i.css';
import '../../css/m/mgo43sbbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w785vnb8d"/><circle class="bn83kioio"/><circle class="svjxeeepc"/><path class="cq8_9dfnj"/><circle class="ajjiiyh9i"/><path class="mgo43sbbk"/>`,
		"fallback": "carbon:ibm-watson-discovery",
	});
}

export default Component;
