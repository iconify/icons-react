import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z55jyj2un.css';
import '../../css/k/kndjxwbkd.css';
import '../../css/p/pmi225hre.css';
import '../../css/m/mrzlzgbxo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z55jyj2un"/><path class="kndjxwbkd"/><path class="pmi225hre"/><path class="mrzlzgbxo"/>`,
		"fallback": "energy-icons:cloud-x-20-bold",
	});
}

export default Component;
