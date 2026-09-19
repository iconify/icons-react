import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cyqjerbjs.css';
import '../../css/c/c24eylukh.css';
import '../../css/k/khcodvqnx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5U0hKb5y"><g class="ufeehvblu"><path class="cyqjerbjs"/><path class="c24eylukh"/><path class="khcodvqnx"/></g></mask></defs><path mask="url(#SVG5U0hKb5y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:id-card",
	});
}

export default Component;
