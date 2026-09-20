import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvvi9ubbg.css';
import '../../css/c/cxyigvjaa.css';
import '../../css/d/doyh-zk4q.css';
import '../../css/j/j-pgzwjpm.css';
import '../../css/f/fplohrbjv.css';
import '../../css/z/zk2i4bb5q.css';
import '../../css/b/bi5b9bb0j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvvi9ubbg"/><path class="cxyigvjaa"/><path class="doyh-zk4q"/><path class="j-pgzwjpm"/><path class="fplohrbjv"/><path class="zk2i4bb5q"/><path class="bi5b9bb0j"/>`,
		"fallback": "temaki:crossing-markings-zebra-bicolour",
	});
}

export default Component;
