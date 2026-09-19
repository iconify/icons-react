import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/n7zicvbeq.css';
import '../../css/a/aruhpbctm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuw3bhdvp"><g class="wwvp95byt"><path class="n7zicvbeq"/><path class="aruhpbctm"/></g></mask></defs><path mask="url(#SVGuw3bhdvp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:cube-four",
	});
}

export default Component;
