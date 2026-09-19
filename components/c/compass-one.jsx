import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/gbh1v2c4l.css';
import '../../css/c/cjud57b0f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyhYEWbVW"><g class="rohhhzb0l"><path class="gbh1v2c4l"/><path class="cjud57b0f"/></g></mask></defs><path mask="url(#SVGyhYEWbVW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:compass-one",
	});
}

export default Component;
