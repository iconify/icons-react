import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mzszod_2j.css';
import '../../css/a/advup0bqq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0zZeze4W"><g class="wwvp95byt"><circle class="mzszod_2j"/><path class="advup0bqq"/></g></mask></defs><path mask="url(#SVG0zZeze4W)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:handle-y",
	});
}

export default Component;
