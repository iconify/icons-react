import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/g/g98cyacwp.css';
import '../../css/j/jgum0gesx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdiy1FdmM"><g class="ylrso7y3c"><path class="g98cyacwp"/><path class="jgum0gesx"/></g></mask></defs><path mask="url(#SVGdiy1FdmM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:eyebrow",
	});
}

export default Component;
