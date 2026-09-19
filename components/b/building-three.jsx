import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/r-k0i6bac.css';
import '../../css/u/ux7etcc_z.css';
import '../../css/h/hzw2nxq1q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7OARJbrF"><g class="wwvp95byt"><path clip-rule="evenodd" class="r-k0i6bac"/><path class="ux7etcc_z"/><path class="hzw2nxq1q"/></g></mask></defs><path mask="url(#SVG7OARJbrF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:building-three",
	});
}

export default Component;
