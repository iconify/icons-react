import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/t/tpckh-bqn.css';
import '../../css/f/fqikxiltt.css';
import '../../css/g/gmzx9rbqs.css';
import '../../css/c/cdqo77b0m.css';
import '../../css/s/st-3vni6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="tpckh-bqn"/><path class="fqikxiltt"/><path class="gmzx9rbqs"/><path class="cdqo77b0m"/><path class="st-3vni6a"/></g>`,
		"fallback": "streamline-kameleon-color:harp-duo",
	});
}

export default Component;
