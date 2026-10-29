import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe9llbc7v.css';
import '../../css/o/orqb6hbxo.css';
import '../../css/a/akv9j47ca.css';
import '../../css/g/g2p54sb3c.css';
import '../../css/o/ou_jazb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow xe9llbc7v"/><path class="orqb6hbxo wm-k"/><path class="akv9j47ca wm-k"/><path class="g2p54sb3c wm-a"/><path class="ou_jazb0f wm-a"/>`,
		"fallback": "withicons-pastel:contactless",
	});
}

export default Component;
