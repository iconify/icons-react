import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t1-uyccej.css';
import '../../css/q/q0gaq6b8r.css';
import '../../css/i/iztk0gbhb.css';
import '../../css/n/n2y6g5b-o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnyERqbiU"><g class="wwvp95byt"><path class="t1-uyccej"/><path class="q0gaq6b8r"/><path class="iztk0gbhb"/><path class="n2y6g5b-o"/></g></mask></defs><path mask="url(#SVGnyERqbiU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:goblet-full",
	});
}

export default Component;
