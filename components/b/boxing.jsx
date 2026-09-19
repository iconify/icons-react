import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/d/du_1q6b0d.css';
import '../../css/k/kdreqsbkh.css';
import '../../css/l/lq78wnbxw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTKh2sexh"><g class="hv130ab-t"><path class="du_1q6b0d"/><path class="kdreqsbkh"/><path class="lq78wnbxw"/></g></mask></defs><path mask="url(#SVGTKh2sexh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:boxing",
	});
}

export default Component;
