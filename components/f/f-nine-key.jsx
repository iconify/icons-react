import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/q/qseas_bes.css';
import '../../css/v/ve4z9yd-u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQx4w4bZK"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="qseas_bes"/><path class="ve4z9yd-u"/></g></mask></defs><path mask="url(#SVGQx4w4bZK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:f-nine-key",
	});
}

export default Component;
