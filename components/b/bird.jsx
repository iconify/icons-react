import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/giubn9csq.css';
import '../../css/h/hkeq5cbxm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGU1VKibWi"><g class="ft5dv1b6b"><path class="giubn9csq"/><circle class="hkeq5cbxm"/></g></mask></defs><path mask="url(#SVGU1VKibWi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bird",
	});
}

export default Component;
