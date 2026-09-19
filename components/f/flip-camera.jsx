import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/ffvw63bvw.css';
import '../../css/n/n63q_g6zn.css';
import '../../css/u/u4fw00ibv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrqdpXljn"><g class="wwvp95byt"><path class="ffvw63bvw"/><circle class="n63q_g6zn"/><path class="u4fw00ibv"/></g></mask></defs><path mask="url(#SVGrqdpXljn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:flip-camera",
	});
}

export default Component;
