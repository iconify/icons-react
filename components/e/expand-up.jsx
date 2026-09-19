import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/o/ojzy-1w0l.css';
import '../../css/l/lqp09mrly.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAdmJ6bTJ"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="ojzy-1w0l"/><path class="lqp09mrly"/></g></mask></defs><path mask="url(#SVGAdmJ6bTJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:expand-up",
	});
}

export default Component;
