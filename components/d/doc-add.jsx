import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jnb6jybjq.css';
import '../../css/b/bhfi5pb9b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGU06iicYZ"><g class="wwvp95byt"><path class="jnb6jybjq"/><path class="bhfi5pb9b"/></g></mask></defs><path mask="url(#SVGU06iicYZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:doc-add",
	});
}

export default Component;
