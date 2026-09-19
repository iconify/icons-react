import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/h/hektu4yux.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMAXOtcpM"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="hektu4yux"/></g></mask></defs><path mask="url(#SVGMAXOtcpM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alignment-right-top",
	});
}

export default Component;
