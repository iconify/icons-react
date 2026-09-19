import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sunx62j5d.css';
import '../../css/p/pohpzj7cj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJYGrYcpv"><g class="ufeehvblu"><path class="sunx62j5d"/><path class="pohpzj7cj"/></g></mask></defs><path mask="url(#SVGJYGrYcpv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:crown",
	});
}

export default Component;
