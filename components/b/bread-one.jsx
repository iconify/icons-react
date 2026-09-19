import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lredrxbap.css';
import '../../css/y/yj5d788he.css';
import '../../css/t/tzbwa-2uv.css';
import '../../css/h/hvu07gbor.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGD4UDFBDh"><g class="wwvp95byt"><path class="lredrxbap"/><path class="yj5d788he"/><path class="tzbwa-2uv"/><path class="hvu07gbor"/></g></mask></defs><path mask="url(#SVGD4UDFBDh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bread-one",
	});
}

export default Component;
