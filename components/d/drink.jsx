import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/p/pizmzxbaf.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfodgrb7a.css';
import '../../css/q/q4eyy3buu.css';
import '../../css/x/x881p7cot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGEkI4wtfN" class="n1mjunbsu"><path class="pizmzxbaf"/></mask><g class="ft5dv1b6b"><path class="jfodgrb7a"/><path mask="url(#SVGEkI4wtfN)" class="q4eyy3buu"/><path class="x881p7cot"/></g>`,
		"fallback": "lets-icons:drink",
	});
}

export default Component;
