import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq4n2vb1a.css';
import '../../css/p/pwrb__blp.css';
import '../../css/i/ic_zdt4yu.css';
import '../../css/z/z3_5cgb-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq4n2vb1a"/><path class="pwrb__blp"/><path class="ic_zdt4yu"/><path class="z3_5cgb-n"/>`,
		"fallback": "energy-icons:carbon-capture-48",
	});
}

export default Component;
