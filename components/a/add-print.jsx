import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/s/stmzisb6i.css';
import '../../css/q/qpg8htbdf.css';
import '../../css/h/h18esy_qw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpsVvjdWi"><g class="gopnm44um"><path class="stmzisb6i"/><path class="qpg8htbdf"/><path class="h18esy_qw"/></g></mask></defs><path mask="url(#SVGpsVvjdWi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:add-print",
	});
}

export default Component;
