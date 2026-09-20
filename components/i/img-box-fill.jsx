import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/s/s-ez4hsnc.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsan6ccor.css';
import '../../css/h/hkf3n6r2q.css';
import '../../css/l/ldl5nccnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGpBX89cBI" class="n1mjunbsu"><path class="s-ez4hsnc"/></mask><g class="ft5dv1b6b"><path clip-rule="evenodd" class="tsan6ccor"/><path mask="url(#SVGpBX89cBI)" class="hkf3n6r2q"/><circle class="ldl5nccnl"/></g>`,
		"fallback": "lets-icons:img-box-fill",
	});
}

export default Component;
