import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqebtubth.css';
import '../../css/n/n9k3er6dk.css';
import '../../css/c/ckanjobhz.css';
import '../../css/a/annjjlb3a.css';
import '../../css/o/o99z3p58k.css';
import '../../css/l/lozb2--un.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqebtubth"/><path clip-rule="evenodd" class="n9k3er6dk"/><path class="ckanjobhz"/><path clip-rule="evenodd" class="annjjlb3a"/><path class="o99z3p58k"/><path class="lozb2--un"/>`,
		"fallback": "selfhst:docusaurus",
	});
}

export default Component;
