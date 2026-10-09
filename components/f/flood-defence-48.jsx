import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhdhg5bwh.css';
import '../../css/m/mv8u5hbfo.css';
import '../../css/v/v04mb_kro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhdhg5bwh"/><path class="mv8u5hbfo"/><path class="v04mb_kro"/>`,
		"fallback": "energy-icons:flood-defence-48",
	});
}

export default Component;
