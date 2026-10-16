import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fj0fnx3qt.css';
import '../../css/l/liwmoc6yg.css';
import '../../css/n/nv1nfqb1r.css';

const viewBox = {"width":365.56,"height":245.56,"left":-2.78,"top":54.22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="fj0fnx3qt"/><path class="liwmoc6yg"/><path class="nv1nfqb1r"/></g>`,
		"fallback": "thesvg-color:cloudevents-dark",
	});
}

export default Component;
